## Mama Concert Website

Marketing and ticketing site for **Mama Concert by Pastor Judith Babirye**.

## Local Development

Install dependencies and run the app:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## PayPal Ticket Booking Setup

The ticket checkout page is at `/tickets` and uses PayPal.

1. Copy `.env.example` to `.env.local`.
2. Add your PayPal credentials:
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
   - `PAYPAL_CLIENT_ID`
   - `PAYPAL_CLIENT_SECRET`
   - `PAYPAL_ENV` (`sandbox` for testing, `live` for production)
3. Optional but recommended for metadata/share URLs:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
4. Restart the dev server after updating environment variables.

## Key Routes

- `/` home page
- `/tickets` PayPal checkout
- `/gallery` event gallery
- `/share-MC` poster sharing page with OG metadata

## Notes

- Poster assets for sharing are in `public/images/posters/`.
- PayPal server endpoints:
  - `POST /api/paypal/create-order`
  - `POST /api/paypal/capture-order`

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
