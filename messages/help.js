module.exports = {
  link_names: true, 
  as_user: true, 
  unfurl_links: true,
  attachments: [
    {
      "title": "Welcome to the Seattle DSA Slack",
      "title_link": "https://seattledsa.org",
      "text": "I am the welcome bot to help new users. Message `help` to me at any time to repeat this message. Below is a list of useful channels. Feel free to pop into any that interest you.",
      "mrkdwn_in": ["text"],
      "color": "#ff0000",
      "footer": "Seattle DSA Slackbot",
      "footer_icon": "https://pbs.twimg.com/profile_images/809817207358095360/SZTlT4d6_400x400.jpg"
    },
    {
      "title": "#activism",
      "text": "For all those interested in planning and talking about direct action."
    },
    {
      "title": "#bookclub, #education, #communications",
      "text": "Big reader? Writer? History buff? These channels might be for you."
    },
    {
      "title": "#design_team",
      "text": "The revolution needs to look good."
    },
    {
      "title": "#culture",
      "text": "Lets build a cultural movement together."
    },
    {
      "title": "#tech",
      "text": "Automating our way to luxury socialism. Projects like this bot are open source and always looking for improvements."
    }
  ]
};
