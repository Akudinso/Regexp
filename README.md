# Regexp

Card Type Implementation: Verve card

Discussion: After much research on the different trypes of credit card, i decided to settle with verve card because of it unique 4 digit prefix. The creditCard function helps to check if the cardNumber entered matches the regex pattern for Verve card.


Verve Card Regex Explanation

^ - start of the string

(5061|6500|5078|5021|5044) - Must start with one of these Verve prefixes

[0-9]{12,15} - Followed by 12 to 15 digits (ensuring total length is between 16-19 digits)

$ - End of the string
