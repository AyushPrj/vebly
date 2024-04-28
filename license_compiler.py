import json
with open('requirements-pinned.txt') as fp:
    data = json.load(fp)

licenses = set()
for component in data.get('components', []):
    for licenses_element in component.get('licenses', []):
        license_element = licenses_element.get('license', {})
        license = license_element.get('id')
        licenses.add(license)

print(licenses)
print(len(data['components']))