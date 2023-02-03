## Challenge! 🚀 Create a UI Component, Knockout.js template and model

Here is a challenge for you. In this task, you'll experiment with creating your own UI Component.

I'll provide you with some general guidelines, and it's up to you to implement this task.

Note: This is a larger task, and will challenge you to use a lot of the concepts you learned so far in this course. 
It will take some time to code this up. If you get stuck on a specific task, try to find the related concept in one 
of the previous course lessons, review it, and re-apply that concept to this task.

### User Story / Summary
As a website visitor, I need to be able to review a summary of my box configurations, and previous the totals before submitting the shipping plan.

### Details
Create a new UI Component named "reviewSubmit". This component will follow the same formats as the "skuLookup" and "boxConfigurations" components & templates.

Create a related template with an h2-tag to show the "Review & Submit" heading. Put the summary data within a table, and use 0 for the default values of this summary data.

Make the submit button disabled unless a SKU has been added, box configurations have been validated, and the terms & conditions checkbox has been checked.

### Visual Mockup

![Alt text](/var/www/html/magento/app/code/MageChamps/InventoryFulfillment/view/frontend/web/images/mockup-1.png "a title")



### Technical Assumptions
Code should follow similar format & structure to the other components & templates created previously. Don't worry about computed the values of the Number of Boxes, Shipment weight and Billable weight -- this will be completed in the following lessons.

This component only needs local state, not external state, to store it's observables.

There is no need to implement anything regarding the "Accept shipping plan" button functionality, other than disabling or enabling the button per the requirements.

### Estimate
~2 hours (don't worry if it takes longer 😜)



When you are complete, check out the next lesson for a video through the steps and the source code.


