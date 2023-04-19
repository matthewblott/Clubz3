import { z } from 'zod'

const Member = z.object({
	Id: z.number(),
	ClubId: z.number(),
	Forename: z.string().min(1).max(50),
	Surname: z.string().min(1).max(50),
	EmailAddress: z.string().min(1).max(50)
})

export { Member }
