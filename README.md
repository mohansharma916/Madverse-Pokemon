This is a Interview Assesment, I have Done For MADVERSE[https://www.madverse.co/]

##  To Run This Project Locally Please Follow Below mention Steps


## Step 1: Install Dependencies

```bash 
   yarn 
```


##  Step 2 :  PostgreSQL with Docker
Setup a development PostgreSQL with Docker. Copy .env.example and rename to .env - cp .env.example .env - which sets the required environments for PostgreSQL such as POSTGRES_USER, POSTGRES_PASSWORD and POSTGRES_DB. Update the variables as you wish and select a strong password.

Start the PostgreSQL database

``` bash

docker-compose -f docker-compose.db.yml up -d


```
## Step 3 : Seed The Database With Demo Data

To Seed the DataBase With Demo Data , 

```bash

npx prisma db seed

```


## Step 4 : Run Project 


``` bash

yarn dev

```


 You Should see Screen Like This 


<img width="1326" alt="Screenshot 2024-01-15 at 11 31 11 AM" src="https://github.com/mohansharma916/Madverse-Pokemon/assets/77909856/5c6946e5-6d0d-4c0f-9497-12d4286d74ea">

