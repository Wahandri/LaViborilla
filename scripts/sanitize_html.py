import re
from pathlib import Path

SOURCE_DIR = Path(__file__).resolve().parents[1]
LEGACY_DIR = SOURCE_DIR / 'legacy'
LEGACY_DIR.mkdir(exist_ok=True)

ATTR_PATTERN = re.compile(r'\s(?:class|id|style|data-[^=\s]*|aria-[^=\s]*|role|tabindex|dir)="[^"]*"')
SCRIPT_PATTERN = re.compile(r'<script[\s\S]*?</script>', re.IGNORECASE)
STYLE_PATTERN = re.compile(r'<style[\s\S]*?</style>', re.IGNORECASE)
COMMENT_PATTERN = re.compile(r'<!--.*?-->', re.DOTALL)
SVG_PATTERN = re.compile(r'<svg[\s\S]*?</svg>', re.IGNORECASE)
DISALLOWED_TAGS = re.compile(r'</?(?!p|h1|h2|h3|h4|h5|h6|ul|ol|li|strong|em|span|a|br|img)[^>]+>', re.IGNORECASE)
MULTI_SPACE = re.compile(r'\s{2,}')
BLOCK_BREAK = re.compile(r'</(p|h[1-6]|li)\s*>', re.IGNORECASE)
BR_TAG = re.compile(r'<br\s*/?>', re.IGNORECASE)
SPAN_TAG = re.compile(r'</?span>', re.IGNORECASE)


def sanitize_html(content: str) -> str:
    content = COMMENT_PATTERN.sub('', content)
    content = SCRIPT_PATTERN.sub('', content)
    content = STYLE_PATTERN.sub('', content)
    content = SVG_PATTERN.sub('', content)
    content = ATTR_PATTERN.sub('', content)
    content = DISALLOWED_TAGS.sub('', content)
    content = SPAN_TAG.sub('', content)
    content = BR_TAG.sub('<br />', content)
    content = BLOCK_BREAK.sub(lambda m: f'</{m.group(1)}>\n', content)
    content = MULTI_SPACE.sub(' ', content)
    content = re.sub(r'\n\s*\n+', '\n', content)
    return content.strip()


def extract_body(content: str) -> str:
    match = re.search(r'<body[^>]*>([\s\S]*?)</body>', content, re.IGNORECASE)
    return match.group(1).strip() if match else content


def main():
    html_files = [p for p in SOURCE_DIR.glob('*.html')]
    for html_file in html_files:
        raw = html_file.read_text(encoding='utf-8', errors='ignore')
        body = extract_body(raw)
        cleaned = sanitize_html(body)
        target = LEGACY_DIR / f'{html_file.stem}.html'
        target.write_text(cleaned, encoding='utf-8')
        print(f'Generated {target.relative_to(SOURCE_DIR)}')


if __name__ == '__main__':
    main()
