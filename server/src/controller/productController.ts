import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();



export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: { contains: search },
    }});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error while retrieving products" });
  }
}

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try{
        const { productId, name, price, stockQuantity, rating } = req.body;
        const newProduct = await prisma.products.create({
            data: {
                productId,
                name,
                price,
                stockQuantity,
                rating
            }
        });
        res.status(201).json(newProduct);
    }
    catch(error){
        res.status(500).json({ message: "Error while creating product" });
    }
}