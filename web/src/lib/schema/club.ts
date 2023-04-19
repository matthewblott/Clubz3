import { z } from 'zod'

const ClubSchema = z.object({
	Id: z.number(),
	Name: z.string().min(1).max(50),
	AddressLine1: z.string().max(50),
	PostalTown: z.string().max(50),
	PostCode: z.string().max(10)
})

type Club = z.infer<typeof ClubSchema>
export { ClubSchema, Club }
