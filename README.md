
# Fetch Backend Challenge (Receipt Processor)

### Candidate - Sankalp Sunil Kadam

#### Overview 

This web service is built using ***Node Js*** and follows ***MVC*** architecture. 
It has two endpoints as per the specifications in the *api.yml* file given ![here](https://github.com/fetch-rewards/receipt-processor-challenge/blob/main/api.yml)

The *schemas* folder is the schema of how a receipt and item should look like and helps in validating the incoming reciept.

The *controllers* has a javascript file which provides the functions needed for the api endpoints.

The *routes* folder has a javascript file which specifies the api endpoints and what function to use when someone hits an endpoint.

The *utils* folder helps with calculating the points and validating the receipt. 

#### ***Technologies Used***

1. JavaScript
2. Node Js
3. Docker

#### ***Steps to run***

This repository contains the code and the docker image is on a remote repository, to run this web service just pull the docker image and run it. Steps for this are -

1. Make sure you have docker and you are logged in on your terminal.<br>
To ensure login run ``` docker login ```.<br>
This command should return login successful.
2. Pull the image - ``` docker pull sankalpkadam/receiptprocessor:0.0.1.RELEASE ```
3. Run the image - ``` docker run -d -p 3000:3000 sankalpkadam/receiptprocessor:0.0.1.RELEASE ```
4. To verify the image is running - ``` docker container ls ```
5. The image with its unique id should show up.<br> 
The web service is now running on *** localhost and port 3000 ***

