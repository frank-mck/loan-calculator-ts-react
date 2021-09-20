## Lendable Front-End test

We'd like you to complete a short programming exercise using React.

We suggest that you don't spend more than 4 hours on this exercise. So feel free to skip some optional requirements, if you think you're spending too much time on the test. Of course, if you want to spend more time, you can do that, too!

Please submit your solution and any notes by sharing a private GitHub or Bitbucket repository with a readme file including the necessary instructions to run the code. Do not share your solution publicly.

Good Luck! We hope you'll find it fun!

PS Please, do check the 'Grading' section at the end of the document. It'll give you an idea about what we're looking for in your test.

## Instructions

#### Brief

We'd like you to implement a small interactive form with two sliders functionally similar to the one implemented on the [www.lendable.co.uk](https://www.lendable.co.uk/) homepage.

We expect the look and feel to broadly match the designs below - but we understand the given timeframe and requirements may force you to leave out details to favour quality of code, tests and functionality.

To make it easier, we also provided some annotations on the design specs.

#### Design

![Design](/design.png)

#### Style annotations:

![Design](/design-notes.png)

#### Must-have requirements

Develop a loan calculator that calculates an interest rate and monthly repayments. More specifically:

- User can select a loan amount using a slider - a free range between `1,000` and `20,000`
- User can also choose a loan term with a slider - a range between `1 year` and `5 years` with a step of `6 months`, e.g. a user may be able to choose '2 <sup>1/2</sup> years'
- Next to each of those sliders we should also display a selected value (as per the mock-up)
- The interest rate is re-calculated the fly on every change to the loan amount using the table given below
- The monthly repayment is calculated on the fly on every change to either an amount or a term
  - We expect you to figure out how to calculate monthly repayments yourself. There're plenty of resources on the Internet on how to do that.
  - *But, please, don't worry* if your results don't **precisely** match what you see on [www.lendable.co.uk](https://www.lendable.co.uk). It'll be difficult to match it, but it can be used as a sanity check.


**Interest rate ranges table:**

| Amount borrowed | Interest rate |
| --------------- | --- |
| £1,000-5,000       | 5%  |
| £5,000-10,000      | 10% |
| £10,000-15,000     | 15% |
| £15,000-20,000     | 20% |

#### Optional requirements

If there are must-have requirements, there should be some optional requirements as well, shouldn't it?

Well, the mock-up above already gives you a few hints. We'll let you decide what you want to implement.

## Grading

The point of the test is to see how you tackle requirements while writing production grade code. You don't have to sacrifice code quality or skip unit tests to delivery every single optional requirement or every glyph of the mock-up.

On the other hand, good code is meaningless, if it doesn't do anything useful. So we still expect you to provide an app that gives value to a user.

More specifically, we're looking for the following:

* Value - does the app work as expected?
* Look-n-feel - does it look similar to the mock-up?
* Architecture - can I easily understand what components there are and how they interact with each other?
* Code quality - is code easy to read and is it written in a consistent way?
* The last two points also applies to styling code
* Unit tests - are there unit tests? Do they test the right things and they are easy to follow?
* And finally we expect that all tests pass and there are no errors or warnings in the browser console

### Technology choice

* The only thing we mandate is React
* At Lendable we try to use TypeScript as much as possible. But feel free to use recent flavours of ECMAScript of Flow
* When it comes to state management, it is all up to you
* Similarly you can use CSS or any CSS pre-processor

#### Notes

- To save time we suggest you use a boilerplate app for React.
- Do not publish your solution
- Document how to run your solution and tests in a readme file.
