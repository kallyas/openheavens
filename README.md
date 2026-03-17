## Mama Concert Website

Marketing site for **Mama Concert by Pastor Judith Babirye**.

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

## Ticket And Donation Setup

Tickets are handled on Eventbrite. Donations are handled on `/donate` using PayPal Checkout, and `/tickets` redirects visitors straight to Eventbrite.

1. Copy `.env.example` to `.env.local`.
2. Add your PayPal credentials:
   - `PAYPAL_CLIENT_ID`
   - `PAYPAL_CLIENT_SECRET`
3. Optional:
   - `PAYPAL_ENVIRONMENT=sandbox` or `live`
   - `PAYPAL_CURRENCY=CAD`
4. Optional but recommended for metadata/share URLs:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
5. Restart the dev server after updating environment variables.

## Key Routes

- `/` home page
- `/donate` PayPal donation page with preset and custom amounts
- `/tickets` redirect to Eventbrite registration
- `/gallery` event gallery
- `/share-MC` poster sharing page with OG metadata

## Notes

- Poster assets for sharing are in `public/images/posters/`.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
