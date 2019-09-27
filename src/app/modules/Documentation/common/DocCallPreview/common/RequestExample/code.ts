export const codes = {
  code:
    'import requests\n' +
    "url = 'https://test-datastore.iatistandard.org/api/activities/?fields=title,participating_organisations&format=json&participating_organisation=AU-5'\n" +
    "response = requests.request('GET', url, headers = headers, data = payload, allow_redirects=False, timeout=undefined, allow_redirects=false)\n" +
    'print(response.text)',
};
