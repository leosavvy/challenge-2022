cd ./backend
npm ci
npm run prisma:apply
npm run prisma:seed
npm run start:dev