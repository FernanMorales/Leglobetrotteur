import csv     
import sys      

f = open(sys.argv[1], 'rb')
stack = []
try:
    reader = csv.reader(f)  
    for row in reader:
        if sys.argv[2] == row[0]:   
            stack.append(row[1])
finally:
    print stack
    f.close()      