module.exports = {
  link_names: true, 
  as_user: true, 
  unfurl_links: true,
  attachments: [
    {
      "title": "Welcome to the #activism channel!",
      "text": "We plan actions and discuss past actions in this channel. ",
      "mrkdwn_in": ["text"],
      "color": "#ff0000",
      "footer": "Seattle DSA Slackbot",
      "footer_icon": "https://pbs.twimg.com/profile_images/809817207358095360/SZTlT4d6_400x400.jpg"      
    },
    {
      "title": "DSA Calendar",
      "title_link": "https://seattledsa.org/event-calendar/",
      "text": "Keep up to date with the public calendar."
    },
    {
      "title": "Action debriefings",
      "title_link": "https://seattledsa.org/category/news/events/actions/",
      "text": "DSA members write up their experiences at various actions."
    },
    {
      "title": "Have time to make some calls?",
      "title_link": "https://calls.seattledsa.org",
      "text": "Check out our mini phone-call to action page and make some calls."
    }    
  ]
};
