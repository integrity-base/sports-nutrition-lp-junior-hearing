"""Build docs/index.html from lp-src/template.html + lp-src/images.json.

Run from the repo root:  python3 lp-src/build.py
"""
import json, re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
tpl = (root / "lp-src/template.html").read_text(encoding="utf-8")
imgs = json.loads((root / "lp-src/images.json").read_text())
for name, uri in imgs.items():
    tpl = tpl.replace("{{" + name + "}}", uri)
left = re.findall(r"\{\{[A-Za-z]+\}\}", tpl)
assert not left, f"unresolved placeholders: {left}"
(root / "docs/index.html").write_text(tpl, encoding="utf-8")
print("built docs/index.html", len(tpl))
