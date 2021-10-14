import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            email: true,
        },
    });

    if (user)
        return res
            .status(401)
            .json({ err: 'User with this email already registered!' });

    const passwordHash = await bcrypt.hash(password, 12);
    const image: Array<string> = name.split(' ');
    let alias: string = '';
    image.length > 1
        ? (alias = image[0].charAt(0) + image[1].charAt(0))
        : (alias = image[0].charAt(0));

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: passwordHash,
            image: `https://avatars.dicebear.com/api/initials/:${alias}.svg`,
        },
    });

    return res.status(200).json(newUser);
}
