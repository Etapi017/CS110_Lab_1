# CS110_Lab_1
Lab Instructions

Complete the following lab assignment.

For this assignment, you will be creating a resume-like website about yourself using only HTML with mild styling. Your website will have the structure shown in the 2 given images.

Usability Requirements In addition to the functionality requirements listed below, we want you to make your interface screen reader friendly, so that more users can enjoy your page! Here’s what we’re asking you to do and why:

A screen reader needs to know in advance what language your website is in in order to function properly.

To help it out, make sure to declare the language of your website in the lang= attribute of the html tag.

Blind and low-sighted users often can’t see images on a site.

To help them enjoy your site’s content, all images must have alt text. The alt text goes in the alt="..." attribute of the image element. You should give a basic description of what is in the image. Putting image in the alt attribute does not count!

Blind or low-sighted users may want to “skim through” a page using their screen reader. To make that easier, the page should have a logical hierarchy using different headings to designate different levels of importance.

Note: your resume page won’t have that many headings. Just don’t use headings to style things!

If you want a piece of text that isn’t a heading to be big or bold, use HTML elements like em and b tag or CSS to style it rather than the heading attribute.

We recommend (not required) running your page through WAVE’s accessibility checker, which can be added to the Chrome browser. For help, take a look at our Accessibility Resource SheetLinks to an external site. in Docs

Functionality Requirements Firstly, your page must have the same structure as the example above(name, title, image, education, work experience, skills, subject interests, and GitHub/LinkedIn links.

Section headings: You will be using h1 and h2 tags throughout your project. Your name will be in an h1 tag, and the remaining headings (ie. title and other sections) will be in h2 tags. Your section headings must also be "emojified" like in the example above. To include an emoji as plaintext in your html file, type "&#" followed by the unicode of the emoji. The unicodes for the emojis I used are as follows:
Book: 128214

Laptop: 128187

Thumbs-up: 128077

Magnifying Glass: 128269

If you're interested in other emojis, you can find their unicode representations here: https://www.w3schools.com/charsets/ref_emoji_smileys.asp

Also between sections, you must have a horizontal bar as shown in the example.

Name and Title: Include your name as an h1 heading, and on a newline, your title as an h2 heading. The spacing should look exactly as above. In item #9, we'll go over how to change the color of this text.

Image of Yourself: Please include an image of yourself. When you first do this, it might look really really big! Don't worry. We recommend you do this step later once we go over it in item #8 below.

Education section: You must list your educational history as an unordered list (ul). In addition, each education list item must contain the same information (degree, school, year) as the example above (also bolding/italicization must match). Expected graduation year is fine. You must have at least 2 list items here (so associate's degree or high school diploma will count in addition to your bachelor's).

Work Experience section: You must list your work history as an unordered list. The styling of each work experience list item must contain the same information as the example above as well as bolding/italicization. For each position you've worked, list 2 sub-items outlining your contributions just like in the example above.

If you don't have work experience, put any projects you've done here instead and title this section "Selected Projects". Include the same information as work experience, except switch out the name of the company with the name of your project. The 2 sub-items will explain your contribution to the project.

Whether you choose to have work or project experience, you must have at least 2 list items (if you really have to, you can make these up).

Skills section: You must have an unordered list with 2 list items: programming languages and technologies. First, list all the programming languages you are familiar with as an unordered list. Then, list all the technologies/tools you're familiar with as an unordered list as well.

Subject Interests section: Write about at least 2 subjects within Computer Science that you are interested in. These can be as many or as few sentences as you want, but regardless, you MUST write about at least 2 subjects. Each subject should be it's own paragraph ().

At the very bottom, include the GitHub and LinkedIn icons. When clicking these, the user should be redirected to your GitHub profile and LinkedIn profile respectively (this does not need to be in a new tab). When you first import the logos, they may be incorrectly sized. We'll go over how to fix that in item # 8 below. If you do not have a GitHub or LinkedIn page, clicking these icons should take the user to the GitHub and LinkedIn home pages.

Styling: During week 3, we'll discuss more about styling. However, we'll get a little head start here!

8A. Name/Title Color: Create a div to wrap around your h1 and h2. Give it a class attribute, and set it equal to "top-heading". In HTML, it's good practice to name classes as all lowercase with words separated by hyphens. Then in your head, create a style tag. Inside your style tag is where all your styling rules will go. To set the color of our top-heading, type ".top-heading {}". Inside these curly braces, type "color: rgb(13, 133, 2) ". As you might guess, this will set the color to those rgb values. You're encouraged to pick different rgb colors for your heading (it doesn't have to be green like mine).

8B. Small Images: We can add the class attribute to other tags, not just divs. Add a class attribute to the GitHub and LinkedIn image tags and label this class as "small-image". Now within your style tag in your head, add a newline, and write ".small-image{}". Inside the curly braces, write "max-width: 50px". This means that any tag with the small-image class can have a maximum width of up to 50 pixels.

8C. Image of Yourself: You can do something similar to 8B. However, the image of yourself should have a greater width than 50 pixels. So add a class attribute to your image tag and specify the max-width of that class in your style tag. To match the example, set it to a max-width of 150 pixels.