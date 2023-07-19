# Welcome to Health App!

## Introduction
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

First, download and extract my zip file to your local machine then use Terminal (Mac) or Command Prompt (Windows) and go to your unzipped folder above

Run 
```bash
npm install

# or

npm install --no-audit

# or

yarn
```
I prefer **yarn**, if you have not yet installed yarn please follow [this guide](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

Second, please install Json Server to simulate the database and APIs. To install the Json server please run this command:
```bash
npm install -g json-server
```

Third, start the Json Server first by run this command in the project directory and keep this Terminal /Command Prompt running:
```bash
json-server --watch db.json
```
The **db.json** parameter above is a JSON file located in the same project directory. I have prepared a lot of data in this file so if you have time, please take a look at this file to know the API response structures.  JSON Server also supports paging and filtering by default. To read more about  JSON Server, please follow this link: https://github.com/typicode/json-server

Last, open another Terminal /Command Prompt in the same project directory. Start the NextJS server with this command:

```bash
npm  run  dev

# or

yarn  dev
```
Now you can access the project by using this URL on your browser: http://localhost:8000/
Currently, there are 3 pages and none of them have supported responsive yet because of the strict deadline:
- My Page: http://localhost:8000/
 - My Record: http://localhost:8000/record
 - Column: http://localhost:8000/column
 **Thank you!**
 