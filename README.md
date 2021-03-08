Design by: Frontend Mentor

Live demo: https://coffeeroasters-sub-site.vercel.app/

Portfolio: https://www.vincitaylaran.com/

# Challenges

## HowItWorks component

The drawing with the circles in the HowItWorks component wasn't particularly difficult to implement, but it was frustrating to find a clean implementation.

I used a grid as a layout for the steps. Each step has a number, title, and description. I nested the circle within each cell, above the step's number. This will let the circle constantly stay above the step number regardless of the device the user is viewing the app in. The tricky part was implementing the horizontal line that runs through each of the circles.

I used `position: relative` for the line and fiddled around with the `top` property until it was in its correct position. Then I had to create a `&__darkPosition` class which is unique to the instance of HowItWorks in the Plan page. For some reason, the line had a drastically different position in the Plan page as opposed to the one in the Home page. In conclusion, I'm not very good at implementing at designs such as these.

## ExpansionPanel component

Implementing this component was pretty fun and challenging at the same time. The challenge was to get three components to sync with eachother everytime an answer was chosen. To add to that challenge, one of the questions had to be disabled if the user chose "Capsule" as the answer to the first question. Now, implementing this component right from the outset wasn't particularly difficult, so I gave myself a challenge to improve the user experience, which was to smoothly scroll down to the next question after the user picked an answer.

The challenging part for this, I'd say, was that I had to figure out how to skip the disabled question. It'd make for a pretty long summary as to how I found the solution to this, so in short, I made use of the `useEffect` hook and made sure the components updated when the state of their parent component changed.
