#!/usr/bin/env python3
import string

words = []

with open("./public/words.txt", "r") as f:
    raw_words = f.readlines()

for word in raw_words:
    word = word.replace('\n', '')
    words.append(word)


def is_valid_word(word):
    """Remove words containing any uppercase characters or non-letter characters"""
    unique_chars = set(word) & set(string.ascii_lowercase)
    return len(unique_chars) == len(set(word))


words = filter(is_valid_word, words)

for word in words:
    print(word)
