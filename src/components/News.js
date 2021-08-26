import React, { Component } from "react";
import Newsitem from "../Newsitem";
import "./News.css";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Magdalena Petrova",
      title:
        "The International Space Station will soon be retired, but a replacement likely won't come from NASA - CNBC",
      description:
        "The International Space Station will likely be retired within the decade. NASA hopes to save money by having commercial companies build the next space outpost.",
      url: "https://www.cnbc.com/2021/08/26/heres-why-the-next-space-station-will-be-commercial.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106933045-1629902815272-51382291327_518a3dbfe2_o.jpg?v=1629902994",
      publishedAt: "2021-08-26T12:00:01Z",
      content:
        "The International Space Station got its start in 1998 when its first segments were launched, and it's now starting to show its age.\r\nSince 2000, the ISS has continuously housed a rotating group of as… [+1109 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Yang Jie, Stephanie Yang, Yoko Kubota",
      title:
        "World’s Largest Chip Maker to Raise Prices, Threatening Costlier Electronics - The Wall Street Journal",
      description:
        "TSMC to increase prices of most advanced chips by roughly 10%; less advanced chips will cost about 20% more",
      url: "https://www.wsj.com/articles/worlds-largest-chip-maker-to-raise-prices-threatening-costlier-electronics-11629978308",
      urlToImage: "https://images.wsj.net/im-391586/social",
      publishedAt: "2021-08-26T11:45:00Z",
      content:
        "The worlds largest contract chip maker is raising prices by as much as 20%, according to people familiar with the matter, a move that could result in consumers paying more for electronics. \r\n Taiwan … [+1015 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Zoe Zoe",
      title:
        "ESPN takes Rachel Nichols off NBA coverage and cancels her show - CBS News",
      description:
        "The decision follows backlash over leaked comments she made about her former colleague Maria Taylor.",
      url: "https://www.cbsnews.com/news/rachel-nichols-espn-nba-coverage-the-jump/",
      urlToImage:
        "https://cbsnews2.cbsistatic.com/hub/i/r/2021/07/06/0352871d-80b0-4f8d-85c9-d4333104c31e/thumbnail/1200x630/241e1a216055a5c5320855935f978bee/gettyimages-1091906438.jpg",
      publishedAt: "2021-08-26T11:41:11Z",
      content:
        'ESPN is pulling reporter Rachel Nichols from its NBA coverage and canceling her show "The Jump," the network confirmed Wednesday. The decision follows backlash over leaked comments she made about her… [+1625 chars]',
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Maeve Reston, CNN",
      title:
        "Recall candidates target California Gov. Gavin Newsom and his top GOP rival Larry Elder in debate - CNN",
      description:
        "As polls have tightened dramatically in recent weeks in the effort to recall Gavin Newsom, the Democratic California governor and his allies have been warning of doomsday scenarios if he is ousted on September 14 and replaced by a conservative Republican bent…",
      url: "https://www.cnn.com/2021/08/26/politics/california-recall-debate/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210823013853-01-gavin-newsom-0817-super-tease.jpg",
      publishedAt: "2021-08-26T11:27:00Z",
      content:
        "(CNN)As polls have tightened dramatically in recent weeks in the effort to recall Gavin Newsom, the Democratic California governor and his allies have been warning of doomsday scenarios if he is oust… [+8887 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "James Vincent",
      title:
        "Celebrate Jeff Bezos’ big day out to space with a $69 miniature dick rocket - The Verge",
      description:
        "Jeff Bezos had a Very Nice Day in space on his Blue Origin, New Shephard rocket. You will never have a Very Nice Day in space, but you can buy a 1/66th scale model of Jeff’s rocket for just $69.99. That’s capitalism, baby.",
      url: "https://www.theverge.com/tldr/2021/8/26/22642560/blue-origins-new-shephard-model-rocket-estes",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/xvzWWoFiB-KfSA7IRLYQukVvg9M=/0x134:1400x867/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22806524/blue_origin_new_shepherd_rocket_model.jpg",
      publishedAt: "2021-08-26T11:11:30Z",
      content:
        "Filed under:\r\nA working, 1/66th replica of Blue Origins New Shephard rocket",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Ashley Strickland, CNN",
      title: "This new class of hot ocean worlds could support life - CNN",
      description:
        "Astronomers have a new class of habitable exoplanets to look for: Hycean planets. These hot ocean worlds are more prevalent across the galaxy and a promising place to search for life outside of our solar system.",
      url: "https://www.cnn.com/2021/08/26/world/hycean-planets-habitable-scn/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210825154442-exoplanets-hycean-super-tease.jpg",
      publishedAt: "2021-08-26T10:16:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Jaclyn Diaz",
      title:
        "An Australian Sheep Farmer Uses His Animals To Offer A Tribute To His Late Aunt - NPR",
      description:
        "When Ben Jackson couldn't get to his beloved aunt's funeral, he wanted to offer a unique tribute — and he knew what to ewes.",
      url: "https://www.npr.org/2021/08/26/1031204615/this-australian-farmer-isnt-sheepish-about-showing-love-for-his-late-aunt",
      urlToImage:
        "https://media.npr.org/assets/img/2021/08/26/ap21238217420351_wide-4089d138cf7d61ca18556edce7010db601fbbd30.jpg?s=1400",
      publishedAt: "2021-08-26T10:09:29Z",
      content:
        "In this image taken from video, sheep form the shape of a heart in a field in Guyra, northern New South Wales, Australia, Thursday, Aug. 5, 2021.\r\nBen Jackson/AP\r\nAustralian sheep farmer Ben Jackson … [+1029 chars]",
    },
    {
      source: {
        id: null,
        name: "Pats Pulpit",
      },
      author: "Bernd Buchmasser",
      title:
        "Why the Patriots and Rams had to change the terms of the Sony Michel trade - Pats Pulpit",
      description: "The originally reported structure had to be altered.",
      url: "https://www.patspulpit.com/2021/8/26/22642554/patriots-rams-change-terms-sony-michel-trade",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/6hFmuOmsGCHsP5yUYA7xcbfMpys=/187x134:2610x1403/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22806517/1234592424.jpg",
      publishedAt: "2021-08-26T10:00:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "HuffPost",
      },
      author: "Julia Ries",
      title:
        "Should We Have Waited Longer Between COVID-19 Vaccine Doses? - HuffPost",
      description:
        "Here's what experts have learned about the time between the Pfizer and Moderna shots and how that affects overall protection.",
      url: "https://www.huffpost.com/entry/waited-longer-covid-19-vaccine-doses_l_6126435de4b0231e3696f0cf",
      urlToImage:
        "https://img.huffingtonpost.com/asset/612658bc26000078cf53f6a7.jpeg?cache=pPe9REPSh6&ops=1778_1000",
      publishedAt: "2021-08-26T09:45:02Z",
      content:
        "When the Pfizer and Moderna COVID-19vaccines first became available in December 2020, there was a strict dosing schedule recommended for the inoculations.\r\nPeople who got the Pfizer shot were advised… [+5326 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Brie Stimson",
      title:
        "Kamala Harris says evacuating Americans, Afghan allies is Biden admin's 'highest priority' - Fox News",
      description:
        'Vice President Kamala Harris said evacuating Americans and U.S. allies in Afghanistan is the administration’s "highest priority" while answering reporters’ questions in Vietnam on Thursday.',
      url: "https://www.foxnews.com/politics/kamala-harris-evacuations-americans-afghan-allies-biden-priority",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/AP21238141486605.jpg",
      publishedAt: "2021-08-26T09:32:50Z",
      content:
        'Vice President Kamala Harris said evacuating Americans and U.S. allies in Afghanistan is the administrations "highest priority" while answering reporters questions in Vietnam on Thursday. \r\nShe reite… [+2985 chars]',
    },
    {
      source: {
        id: "newsweek",
        name: "Newsweek",
      },
      author: "Darragh Roche",
      title:
        "Donald Trump Fights 'Leftist' 1/6 Committee Request With 'Executive Privilege' - Newsweek",
      description:
        'The committee is seeking "communications within and among the White House and Executive Branch agencies."',
      url: "https://www.newsweek.com/donald-trump-fights-leftist-1-6-committee-request-executive-privilege-1623174",
      urlToImage:
        "https://d.newsweek.com/en/full/1880374/donald-trump-enters-rally-arizona.jpg",
      publishedAt: "2021-08-26T09:17:00Z",
      content:
        'Former President Donald Trump has called the select committee investigating the January 6 Capitol riot a "partisan shame" and suggested he will invoke executive privilege as the committee seeks a tro… [+3911 chars]',
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "",
      title:
        "Data Stolen in Microsoft Exchange Hack May Have Helped Feed China's AI Project - NPR",
      description:
        "China broke into tens of thousands of email accounts in January. Now officials fear the breach wasn't just about spying. It was to build the next generation of artificial intelligence.",
      url: "https://www.npr.org/2021/08/26/1013501080/chinas-microsoft-hack-may-have-had-a-bigger-purpose-than-just-spying",
      urlToImage:
        "https://media.npr.org/assets/img/2021/07/07/emailhack2_web_wide-843f26c715d5030ddebf7f4dab541d10d93393a2.jpg?s=1400",
      publishedAt: "2021-08-26T09:00:26Z",
      content:
        "When investigators discovered the hack on Microsoft Exchange servers in January, they thought it was about stealing emails. Now they believe China vacuumed up reams of information in a bid to develop… [+17981 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Brian Mann",
      title:
        "Judge Pushes Back On Protections For The Sacklers In The Purdue Pharma Bankruptcy - NPR",
      description:
        "Judge Robert Drain signaled he will approve the landmark bankruptcy for Purdue Pharma, the maker of Oxycontin. But he called for new limits to legal protections for members of the Sackler family.",
      url: "https://www.npr.org/2021/08/26/1031119666/judge-sackler-liability-purdue-pharma-opioids-bankruptcy",
      urlToImage:
        "https://media.npr.org/assets/img/2021/08/25/ap21231762315225_wide-87a460da43fd2e5b1e197d97873ba3d0ccc69a00.jpg?s=1400",
      publishedAt: "2021-08-26T09:00:00Z",
      content:
        "Kathe Sackler, a member of the family that owns Purdue Pharma, testifies via video in December 2020 to a House Oversight Committee hearing in Washington. Sackler was one of four members of her family… [+3765 chars]",
    },
    {
      source: {
        id: null,
        name: "Daily Beast",
      },
      author: "Jasleen Arneja, Maia Majumder",
      title:
        "Sturgis Rally Is What a Vaccine-Era Coronavirus Superspreader Event Looks Like - Daily Beast",
      description:
        "Unlike Lollapalooza in Chicago, the Sturgis Motorcycle Rally was the perfect storm for a vaccine-era superspeader event.",
      url: "https://www.thedailybeast.com/sturgis-rally-is-what-a-vaccine-era-coronavirus-superspreader-event-looks-like",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1629932218/210825-Majumder-sturgis-tease_copy_zawvty",
      publishedAt: "2021-08-26T08:56:48Z",
      content:
        "In western South Dakotas Meade County, more than one in three COVID-19 tests are currently returning positive, and over the last three weeks, seven-day average case counts have increased by 3,400 per… [+8831 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "Meridith McGraw",
      title:
        "Mike Pompeo takes his own arrows over the Afghanistan collapse - POLITICO",
      description:
        "Trump’s former secretary of State played a key role in the deal with the Taliban. He says Biden botched it. Other Republicans aren’t letting him off the hook.",
      url: "https://www.politico.com/news/2021/08/26/mike-pompeo-afghanistan-collapse-506927",
      urlToImage:
        "https://static.politico.com/3b/7e/468176ed45a49398abba4a14ed25/210524-mike-pompeo-getty-773.jpg",
      publishedAt: "2021-08-26T08:30:27Z",
      content:
        "Trying to extricate yourself from this withdrawal is I think difficult if not impossible to do, especially to rewrite history about what actually happened, said former Trump national security adviser… [+9432 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Vicky McKeever",
      title:
        "Treasury yields are flat ahead of Fed Jackson Hole summit and economic data - CNBC",
      description:
        "U.S. Treasury yields were mixed on Thursday morning, ahead of the Federal Reserve's Jackson Hole symposium, as well as the release of economic growth data.",
      url: "https://www.cnbc.com/2021/08/26/us-bonds-treasury-yields-mixed-ahead-of-fed-jackson-hole-symposium.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106859523-1616690762270Trading-Floor-OB-Photo-210325-PRESS-5-jpg?v=1616690891",
      publishedAt: "2021-08-26T08:15:09Z",
      content:
        "U.S. Treasury yields were mixed on Thursday, ahead of the Federal Reserve's Jackson Hole symposium, as well as the release of economic data.\r\nThe yield on the benchmark 10-year Treasury note rose les… [+1597 chars]",
    },
    {
      source: {
        id: null,
        name: "GMA",
      },
      author: "Katie Kindelan",
      title:
        "Mom who lost her baby after contracting COVID urges pregnant women to get vaccinated - GMA",
      description:
        "Vanessa Alfermann was just 22 weeks pregnant when she gave birth.",
      url: "https://www.goodmorningamerica.com/wellness/story/nurse-lost-baby-contracting-covid-19-urges-pregnant-79636047",
      urlToImage:
        "https://s.abcnews.com/images/GMA/vanessa-alferman-01-ht-jef-210825_1629900827690_hpMain_16x9_992.jpg",
      publishedAt: "2021-08-26T08:15:00Z",
      content: null,
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Christal Hayes, USA TODAY",
      title:
        "New Mexico establishes waiting list for ICU beds; New York adds 12K nursing home deaths: Latest COVID-19 updates - USA TODAY",
      description:
        "New York adds 12K nursing home deaths than previously reported, New Mexico established a hospital waiting list for ICU beds. More COVID-19 updates.",
      url: "https://www.usatoday.com/story/news/health/2021/08/26/covid-hospitalizations-vaccine-mandates-masks-cases/5595572001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2021/08/26/USAT/18edb1d5-e911-482a-8799-be6d61cbb97a-AP_Virus_Outbreak_Vaccine_Mandates.jpg?auto=webp&crop=6047,3401,x0,y167&format=pjpg&width=1200",
      publishedAt: "2021-08-26T08:00:29Z",
      content:
        "Several states seeing surges in COVID-19 cases are dealing with such an influx of sick residents that hospital beds are drying up.\r\nNew Mexico's top health officials have had to establish a waiting l… [+4889 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3 text-center">
        <h2 className="text-center">NEWS CHINDI - Top Headlines</h2>
        <div className="news__items">
          {this.state.articles.map((element) => {
            return (
              <Newsitem
                key={element.url}
                title={element.title.slice(0, 50)}
                description={element.description.slice(0, 70)}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
