module.exports = {
  link_names: true, 
  as_user: true, 
  unfurl_links: true,
  attachments: [
    {
      "title": "Welcome to the #tech channel!",
      "text": "Below are some links and information about SDSAs tech initiatives.",
      "mrkdwn_in": ["text"],
      "color": "#ff0000",
      "footer": "Seattle DSA Slackbot",
      "footer_icon": "https://pbs.twimg.com/profile_images/809817207358095360/SZTlT4d6_400x400.jpg"      
    },
    {
      "title": "Github Organization",
      "title_link": "https://github.com/SeattleDSA",
      "text": "Check out the backlogs and issues. Create some PRs. Ask in #tech to get your github account to the org."
    },
    {
      "title": "Project Backlogs",
      "title_link": "https://github.com/orgs/SeattleDSA/projects",
      "text": "Looking for something to work on? Check out the project boards or issue lists."
    }
  ]
};
