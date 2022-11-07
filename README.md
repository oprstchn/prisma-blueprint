# prisma-blueprint

npx prisma migrate dev --name init
npx prisma generate


```shell
curl -X POST http://localhost:3001/trpc/user.createOneUser -d '{"data": {"name":"masachika"}}' -H 'content-type: application'
{"id":null,"result":{"type":"data","data":{"id":"cla6kksfn00009r0bo2283fhn","name":"masachika","createdAt":"2022-11-07T09:17:08.723Z","updatedAt":"2022-11-07T09:17:08.723Z"}}}

# {"id":null,"result":{"type":"data","data":{"id":"cla6kksfn00009r0bo2283fhn","name":"masachika","createdAt":"2022-11-07T09:17:08.723Z","updatedAt":"2022-11-07T09:17:08.723Z"}}}

```
