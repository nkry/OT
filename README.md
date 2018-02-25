# OT FE
- Handle loading for landing images
- Mobile, tablet + large screen styles
- Configure/style jsx so whatever is input in backend renders as it does with static content
- Plug in backend when frontend is ready
- Conditionals (styles + content) based on data from backend
- CSSGrid breaks in safari; need to use v10 + above? (update OS)

# Enhancments
- Text cursor 'PAUSE' and 'PLAY' on video
- Rewrite full background video fn with vanilla js only (remove jquery)
- Rewrite fullscreen video styles with style components (would then need to use another method for selectors)

# Ideas
- Instead of updating /content to have videos stacked non fullscreen vertically, use the sidebar text to say something like '→ Next Video'? (if there is more than one); it could then update state/update the video playlist. Could read 'Now Playing: 'Video Name' then on hover could change to the title of next video (would be CTA)
