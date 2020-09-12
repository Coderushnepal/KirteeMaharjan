import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.json({
    name: 'calorie-counter-api',
    version: '1.0.0'
  });
});

export default router;
