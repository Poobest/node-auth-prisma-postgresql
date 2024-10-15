1. start db: docker compose up -d
2. install package:  npm install
3. npx prisma init
4. npx prisma generate && npx prisma migrate dev --name init
5. start : npm run dev

register : http://localhost:3000/api/auth/register {username, email, password}
login : http://localhost:3000/api/auth/login {email, password}
refresh token : http://localhost:3000/api/auth/lrefresh-token body {'refreshToken' : 'refreshToken from login'}

CRUD: Product : http://localhost:3000/api/products header Authorization Bearer JWT
   
