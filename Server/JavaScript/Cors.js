import cors from 'cors';
import express from 'express'

export const Cors  = (app) =>{
    app.use(cors());
    app.use(express.json());
}

