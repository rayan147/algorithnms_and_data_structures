# Karatsuba Algorithmns
# what is karatsuba algorithm ? 
# it is algorithnm that multiple 2 given interger (in this case even) 

# given two interger number 2925 and 6872 
# Write a func that takes two given in put x,y 
# output should be the product of x,y 

#First break the 2925 into 2 chuncks,
# a=29 and b=25 
#Second break 6872 into 2 chuncks as well c=68 and d=72

# 29|25 ab
# 68|72 cd
# ac|bd

#lets calculate ac as 29x68 =1972 ,bd as 25x72=1800 and (a+b)x(c+d) as
#(29 +25) x(68 + 72) = 7560

#############################################################
#NOTE we multiple vertically and add and multiple horizontally
###############################################################

#Next subtract ac and bd from the final quantity to get (ad + bc) = 7560 – 1972 – 1800 = 3788.

#Add 4 zeros to the end of ac to get 19,720,000 call this number A.

#Add 2 zeros to the end of (ab + cd) to get 378,800 call this number B.II

def zeroPad(numberString, zeros, left = True):
    """Return the string with zeros added to the left or right."""
    for i in range(zeros):
        if left:
            numberString = '0' + numberString
        else:
            numberString = numberString + '0'
    return numberString
def karatsubaMultiplication(x ,y):
    """Multiply two integers using Karatsuba's algorithm."""
    #convert to strings for easy access to digits
    x = str(x)
    y = str(y)
    #base case for recursion
    if len(x) == 1 and len(y) == 1:
        return int(x) * int(y)
    if len(x) < len(y):
        x = zeroPad(x, len(y) - len(x))
    elif len(y) < len(x):
        y = zeroPad(y, len(x) - len(y))
    n = len(x)
    j = n//2
    #for odd digit integers
    if (n % 2) != 0:
        j += 1
    BZeroPadding = n - j
    AZeroPadding = BZeroPadding * 2
    a = int(x[:j])
    b = int(x[j:])
    c = int(y[:j])
    d = int(y[j:])
    #recursively calculate
    ac = karatsubaMultiplication(a, c)
    bd = karatsubaMultiplication(b, d)
    k = karatsubaMultiplication(a + b, c + d)
    A = int(zeroPad(str(ac), AZeroPadding, False))
    B = int(zeroPad(str(k - ac - bd), BZeroPadding, False))
    return A + B + bd
#ref=https://www.codeandgadgets.com/karatsuba-multiplication-python/
