# rent-car v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Cars](#cars)
	- [Create cars](#create-cars)
	- [Delete cars](#delete-cars)
	- [Retrieve cars](#retrieve-cars)
	- [Update cars](#update-cars)
	
- [Destination](#destination)
	- [Create destination](#create-destination)
	- [Delete destination](#delete-destination)
	- [Retrieve destination](#retrieve-destination)
	- [Retrieve destinations](#retrieve-destinations)
	- [Update destination](#update-destination)
	
- [Images](#images)
	- [Create images](#create-images)
	- [Delete images](#delete-images)
	- [Retrieve images](#retrieve-images)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Receive Code Verification](#receive-code-verification)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Send Code Verification](#send-code-verification)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

# Cars

## Create cars



	POST /cars


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| String			|  <p>Cars's name.</p>							|
| model			| String			|  <p>Cars's model.</p>							|
| year			| String			|  <p>Cars's year.</p>							|
| description			| String			|  <p>Cars's description.</p>							|

## Delete cars



	DELETE /cars/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve cars



	GET /cars


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update cars



	PUT /cars/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| String			|  <p>Cars's name.</p>							|
| model			| String			|  <p>Cars's model.</p>							|
| year			| String			|  <p>Cars's year.</p>							|
| description			| String			|  <p>Cars's description.</p>							|

# Destination

## Create destination



	POST /destinations


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| destination			| String			|  <p>Destination's destination.</p>							|
| destination_cor			| String			|  <p>Destination's coordinates destination.</p>							|
| arrival			| String			|  <p>Destination's arrival.</p>							|
| arrival_cor			| String			|  <p>Destination's coordinates arrival.</p>							|
| car			| ObjectId			|  <p>Destination's carId.</p>							|
| date			| String			|  <p>Destination's date.</p>							|
| status			| Boolean			|  <p>Destination's status.</p>							|

## Delete destination



	DELETE /destinations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve destination



	GET /destinations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve destinations



	GET /destinations


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update destination



	PUT /destinations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| destination			| String			|  <p>Destination's destination.</p>							|
| destination_cor			| String			|  <p>Destination's coordinates destination.</p>							|
| arrival			| String			|  <p>Destination's arrival.</p>							|
| arrival_cor			| String			|  <p>Destination's coordinates arrival.</p>							|
| car			| ObjectId			|  <p>Destination's carId.</p>							|
| date			| String			|  <p>Destination's date.</p>							|
| status			| Boolean			|  <p>Destination's status.</p>							|

# Images

## Create images



	POST /images


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| File			|  <p>Send files.</p>							|
| car			| ObjectId			|  <p>Car's Object Id.</p>							|

## Delete images



	DELETE /images/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve images



	GET /images


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Receive Code Verification



	POST /receive-code


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| phone			| String			|  <p>The user's phone where the code verification was sent.</p>							|
| code			| String			|  <p>The code that was sent.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Send Code Verification



	POST /send-code


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| phone			| String			|  <p>The user's phone where the code verification will be sent.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


