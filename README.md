# Reddit Search

Exercise in React JS. Pulls from Reddit endpoint to display links based on a user's searh query.

1. Run `npm install` after downloading.
2. Then run `npm start` and go to localhost:8000.

## Notes
I broke down the task into three main components, the reddit search, pinned items and the search results. I thought this was a good way to group the three different components without overdoing the distribution.

The search results which I have named links are broken down into further smaller components. The list of the results is one component, which is made up of link components. A link component is made up of elements of the link, but it is not broken down into further smaller components since I feel that all information displayed in each link are all on the same level of relevance, so there is no need to nest them.

LinkBoxComponent manages the states related to the search results. If a user submits a search query on LinkSearchComponent, it will update an internal state `query` and pull links from the reddit endpoint with an ajax call. The retrieved data becomes the LinkListComponent's props `data` which will assign a link id for each LinkComponent. In componentDidMount(), I set up a pollInterval to call the endpoint every 30 sec with the last query the user submitted. 

The LinkComponent calls the reddit endpoint for retrieving comments using the link id. It would then display the title of the article, thumbnail if it exists (a place holder image if it doesn't), highest rated comment, the user of that comment, the score of that comment, the permalink for the reddit thread, and the outbound hyperlink.

For pinning, I reused the LinkComponent because it just needs to display the same links except in different part of the page.

For the css, the webpack I used automatically made a stylesheet for each component I generated, so I structured the css in each file to apply to only the elements in that component.

I used bootstrap for its responsive grid layout capabilities.


## Todo with more time
- persistence for pinned links
- truncate messages so links with long highest comments are not overwhelmingly long


