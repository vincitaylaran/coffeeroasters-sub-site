# Challenges

## <HowItWorks />

The drawing with the circles in the HowItWorks component wasn't particularly difficult to implement, but it was frustrating to find a clean implementation.

I used a grid as a layout for the steps. Each step has a number, title, and description. I nested the circle within each cell, above the step's number. This will let the circle constantly stay above the step number regardless of the device the user is viewing the app in. The tricky part was implementing the horizontal line that runs through each of the circles.

I used `position: relative` for the line and fiddled around with the `top` property until it was in its correct position. Then I had to create a `&__darkPosition` class which is unique to the instance of HowItWorks in the Plan page. For some reason, the line had a drastically different position in the Plan page as opposed to the one in the Home page. In conclusion, I'm not very good at implementing at designs such as these.
