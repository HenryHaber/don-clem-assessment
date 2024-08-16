# Don-Clem Fullstack Developer Assessment.
### QUESTION 1 - 


 Given below a JSON object with the below structure.
 The “internet_hubs” represents a list of internet hubs  with “Id” and serial number, the serial 
number has been assigned to the first object with Id “men1”,  
{
  "comment": "Do NOT commit local changes to this file to source control",
  "Internet_hubs": [
    {
      "id": "men1",
      "serial_number": "C25CTW00000000001470"
    },
    {
      "id": "mn1",
      "serial_number": "<serial number here>"
    },
    {
      "id": "mn2",
      "serial_number": "<serial number here>"
    },
    {
      "id": "mn3",
      "serial_number": "<serial number here>"
    },
    {
      "id": "mn4",
      "serial_number": "<serial number here>"
    },
    {
      "id": "mn5",
      "serial_number": "<serial number here>"
    },
    {
      "id": "mn6",
      "serial_number": "<serial number here>"
    },
    {
      "id": "mn7",
      "serial_number": "<serial number here>"
    },
    {
      "id": "mn8",
      "serial_number": "<serial number here>"
    },
    {
      "id": "mn9",
      "serial_number": "<serial number here>"
    }
  ]
 }
 Task:
 Given a serial number from  C25CTW00000000001471  to  C25CTW00000000001478
 Write a function that:
 1. Validate and cleans the given JSON objects according to the structure above
 2. Assigns the “internet_hubs” a  serial number from the range given above. The last four digits of 
the serial number (1471 to 1478) should be used as order of the serial number and should be 
assigned in reversed order to the last digit of the Id’s,
I.e{
      "id": "mn1",
      "serial_number": "C25CTW00000000001478"
    },
 {
      "id": "mn9",
      "serial_number": "C25CTW00000000001471"
    }  
and so fort
 3.Return the validated, cleaned and updated json object as well as the original objects


### QUESTION 2

 Question 2:
 We have a API service that uses the below API Keys for authorisation:
      X-API-KEy: ssfdsjfksjdhfgjfgvjdshgvshgkjsdlgvkjsdgjkl
 The API exposes these two endpoints :
 1. https://clemant_demo.com/address_inventory/{customer_number}   
2. https://clemant_demo.com/customer_numbers
 A get request to the first endpoint with the customer number will retrieve that  customer 
address. The address returned is in a JSON format of the structure:
 {
      "id": 76767,
      "first_name": "skfhfkjd",
      "last_name": "ttuiu",
      "street": "my street name",
      "street": "",
      "postcode": "b76345",
      "state": "london"
      "country": "united kingdom"
      "lat": 38.8951
      "lon": -77.0364
    },
 While a get request to the second endpoint will return the total customer number available, 
which can be used to find the customer address. A single number is returned, example 400, 
(which then assumes that the customer number starts from 1 to 400).
 Task specification:
 We need a program with the following features:
 1. Retrieve all the addresses of all the customer using each customer number
 2.Clean and validate that the address information for each customer is without error and 
individual fields are of correct type and format.
 3.Write the complete list of customer addresses in a CSV format in a named file
 4.The program should communicate the name of the CSV file containing the address and the 
path where it is saved to
 5.The program should return the list of all the customer addresses in a tabular form