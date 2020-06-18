class Person:
    name = ""
    age = 0

    def __init__(self, personName, personAge):
        self.name = personName
        self.age = personAge

p = Person('Pankaj', 34)

print(p.__str__())
print(p.__repr__())
p = Person('Pankaj', 34)
# __str__() example
print(p)
print(p.__str__())

s = str(p)
print(s)

# __repr__() example
print(p.__repr__())
print(type(p.__repr__()))
print(repr(p))
Output:


Person(name=Pankaj, age=34)
Person(name=Pankaj, age=34)
Person(name=Pankaj, age=34)
{'name': 'Pankaj', 'age': 34}
<class 'dict'>
  File "/Users/pankaj/Documents/PycharmProjects/BasicPython/basic_examples/str_repr_functions.py", line 29, in <module>
    print(repr(p))
TypeError: __repr__ returned non-string (type dict)
Notice that repr() function is throwing TypeError since our __repr__ implementation is returning dict and not string.

Let’s change the implementation of __repr__ function as follows:


    def __repr__(self):
        return '{name:'+self.name+', age:'+str(self.age)+ '}'
Now it’s returning String, and the new output for object representation calls will be:


{name:Pankaj, age:34}
<class 'str'>
{name:Pankaj, age:34}
Earlier we mentioned that if we don’t implement __str__ function then the __repr__ function is called. Just comment the __str__ function implementation from Person class and print(p) will print {name:Pankaj, age:34}.

Difference between __str__ and __repr__ functions
__str__ must return string object whereas __repr__ can return any python expression.
If __str__ implementation is missing then __repr__ function is used as fallback. There is no fallback if __repr__ function implementation is missing.
If __repr__ function is returning String representation of the object, we can skip implementation of __str__ function.
Summary
Both __str__ and __repr__ functions are very similar. We can get the object representation in String format as well as other specific formats such as tuple and dict to get information about the object.

