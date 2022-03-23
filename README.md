# Static Job Listings

#### Made using React, it is a Job Listing webpage that includes a filtering solution.

## Overview

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot - Job Listing Preview

![](/public/images/JobListing-preview.png)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- [React](https://reactjs.org/) - JS library

### Coding Process

The main challenge I had to go through was the filtering aspect of the application, as the JSON data is formated as an object in addition with nested arrays. So not only would the data have to be filtered and rendered, but also the filters must be shown in the top in the form of tags that are interactive and can be removed and re-render the immutable list.

How this could first be achieved is by using the useEffect hook, which will monitor the side-effects of the render everytime a filter is added or removed.

## JobList Component

```js
const filterJobs = (key, tag) => {
    if (key === "languages" || key === "tools") {
        setFilterTags((prevTags) => [...prevTags, { [key]: [tag] }]);
    } else {
        setFilterTags((prevTags) => [...prevTags, { [key]: tag }]);
    }
    isTagListOpen(true);
};

...

useEffect(() => {
    const filteredTable = jsonData.filter((job) => {
        return filterTags.every((tag) => {
            const [key, value] = Object.entries(tag)[0];
            if (key === "languages" || key === "tools") {
                return job[key].some((x) => x.includes(value));
            } else {
                return job[key] === value;
            }
        });
    });
    setFilterJobList(filteredTable);
    if (filterTags.length < 1) {
        isTagListOpen(false);
    }
}, [filterTags]);
```

## JobCard Component - JSX

```jsx
<div className="job-tags">
	<button onClick={() => filterBtn("role", job.role)}>
		<span>{job.role}</span>
	</button>
	...
	{job.languages.map((lang) => (
		<button onClick={() => filterBtn("languages", lang)}>
			<span>{lang}</span>
		</button>
	))}
	...
</div>
```

### **How this works?**

In order for the re-rendering of a filtered list, state management would have to focus on two features; the filtered list and the tags. An array of objects that carries state of filtered tags would be matched with the JSON data rendered and re-render to a list that will match the conditions of the state.

Using useEffect, it will render each change using the dependency array that monitors the change of the filtered tags. Furthermore, with nested arrays, as long as it matches the keys with values of nested arrays, it will use the **.some**() method in order to match the array of the filtered tags with the nested array based on the key.

Lastly, depending on the viewport (mobile/desktop), the tag container will be positioned differently, absolute and static, in order to fully optimize UI for a user to maintain an easier experience in my webpage.

### Continued development

To improve the webpage, I would have to implement in disabling the ability to repeat pressing the same filter button, which may include some refactoring the code in my joblist component. Should anyone give me some pointers and advice please message me via my website below with its details or add your comments in my Frontend Mentor solution page.

## Author

- Solution Website - [Job-Listings](https://salsabaga.github.io/job-listings/)
- My Portfolio - [Danny Baldeon Abril Portfolio](https://salsabaga.github.io/dba_portfolio/)
- Frontend Mentor - [@Salsabaga](https://www.frontendmentor.io/profile/Salsabaga)
