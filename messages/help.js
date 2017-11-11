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
      "title": "Seattle DSA Slack Code of Conduct",
      "title_link": "https://docs.google.com/document/d/1ybaldGp-EJ9ehhTe6-6mar5ifolj1nISpwhdb-dIwOQ/edit?usp=sharing",
      "color": "#ff0000",
      "text": "Please review the Seattle DSA Slack Code of Conduct. *All members are expected to familiarize themselves before participating in discussions.*",
      "mrkdwn_in": ["text"]      
    },
    {
      "title": "#dsa_business",
      "text": "Local chapter business and discussion."
    },
    {
      "title": "Our Current Campaigns",
      "text": "Join #public_bank, #housing_for_all and #single_payer to get started with our current campaigns."
    },
    {
      "title": "#open_discussion",
      "text": "Links, thoughts, anything socialism!"
    },
    {
      "title": "#events",
      "text": "Bulletin board of events going on."
    },    
    {
      "title": "#activism",
      "text": "For all those interested in planning and talking about direct action."
    },
    {
      "title": "#community_service",
      "text": "Community outreach, service projects, donations, and drives."
    },
    {
      "title": "#bookclub, #education, #communications",
      "text": "Big reader? Writer? History buff? These channels might be for you."
    }
  ]
};
