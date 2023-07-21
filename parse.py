#!/usr/bin/env python3

from bs4 import BeautifulSoup
from decimal import Decimal

html_doc = None

with open('./index.html', 'r') as f:
    html_doc = f.read()


soup = BeautifulSoup(html_doc, 'html.parser')

table = soup.findAll('table')[1]
rows = table.findAll('td')[2:]

letters = {}

prev = None
for index, row in enumerate(rows):
    print(index, row)
    content = row.contents[0]
    if index % 2 == 0:
        prev = content
        letters[content] = 0
    else:
        content = content.replace(' %', '')
        letters[prev] = float(content) / 100.0
        

print(letters)
print(
    sum(
        letters.values()
    )
)