# John & Rhona Wedding Website

Static wedding website prototype for John Ray Respende and Rhona Paula Atangan.

## Current sections

- Home / Hero
- The Couple
- Wedding Day: Ceremony + Reception
- Countdown
- Dress Code
- Entourage
- Photos / Gallery
- Pre-wedding Video placeholder
- Q + A
- RSVP / Find Your Invitation placeholder
- Closing

## Project structure

```text
john-rhona-wedding/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
└── video/
```

## Image workflow

Place wedding photos in `assets/images/` and update the relevant `src` in `index.html`.

Current image files include:

- `hero.jpg`
- `story.jpg`
- `ceremony.png`
- `reception.webp`
- `gallery-01.jpg`
- `gallery-02.jpg`
- `gallery-03.jpg`
- `gallery-04.jpg`

Images use `object-fit: cover` and `object-position: center center` by default.

## Next implementation steps

1. Replace remaining placeholder copy with the couple's final information.
2. Add the finalized dress code.
3. Add the full entourage names and roles.
4. Add the final Q + A items.
5. Add the pre-wedding video.
6. Connect RSVP invitation lookup and group RSVP storage.
7. Optimize images and deploy to the chosen free hosting platform.
