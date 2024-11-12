# V-Pal

This is a simple web app that displays dashboard based on specified design

# Prerequisiite

- node (version 22)
- npm or yarn

# Developers Experience Features

- Eslint to manage code quality and consistence
- Typescript to provide type safety

# Getting Started

1. Clone the Repository:
   Clone the repository to your local machine.

git clone https://github.com/AyodeleJoshua/v-pal-2.git
cd v-pal-2

2. Install Dependencies:
   Navigate to the project directory and install dependencies.
   `npm install`

3. Environment Variables:
   Add .env file to root of the project

4. Run the Application Locally:
   To start the development server, use the following command:
   `npm run dev`

The application should start up on http://localhost:3000/crypto-coin/

5. Build the Application for Production:
   To create an optimized production build, use the following command:
   `npm run build`

# Files and Folders Organization

```
v-pal-2/
├── src/                       
|   ├── api\                   
|   |   └── apiCallMethods.ts
|   ├── assets\                    # assets for app
|   |   ├── icons\
|   |   |   ├── account_tree.svg
|   |   |   ├── add.svg
|   |   |   ├── bank.svg
|   |   |   ├── building.svg
|   |   |   ├── calendar.svg
|   |   |   ├── chat.svg
|   |   |   ├── communities.svg
|   |   |   ├── contract_edit_primary.svg
|   |   |   ├── contract_edit.svg
|   |   |   ├── globe.svg
|   |   |   ├── grid_view.svg
|   |   |   ├── mail.svg
|   |   |   ├── monitoring.svg
|   |   |   ├── nigeria-flag.svg
|   |   |   ├── notification.svg
|   |   |   ├── upgrade.svg
|   |   |   ├── usa-flag.svg
|   |   |   └── visit-globe.svg
|   |   └── images\ 
|   |   |   ├── avatar.png
|   |   |   ├── boy-pink-dropdown.png
|   |   |   ├── boy-with-var.png
|   |   |   └── vendpal-logo.png
|   |   └── react.svg
│   ├── components\
|   |   ├── BudgetRoomFinancialYearSection\ 
|   |   |   ├── budgetRoomFinancialYearSection.module.css 
|   |   |   └── index.tsx
|   |   ├── DashboardHomeCard\ 
|   |   |   ├── dashboardHomeCard.module.css 
|   |   |   └── index.tsx 
|   |   ├── DashboardLayout\
|   |   |   ├── dashboadLayoutTabList.ts
|   |   |   ├── DashboardLayout.module.css 
|   |   |   ├── Footer.tsx
|   |   |   ├── index.tsx
|   |   |   └── Navigation.tsx   
|   |   ├── FlexedTypographyWithBadge\    
|   |   |   ├── flexedTypographyWithBadge.module.css
|   |   |   └── index.tsx 
|   |   ├── LinksCard\   
|   |   |   ├── linksCard.module.css
|   |   |   └── index.tsx    
|   |   ├── RoundedNavigationIcon\     
|   |   |   ├── roundedNavigationIcon.module.css
|   |   |   └── index.tsx     
|   |   ├── TeamsInfoCard\    
|   |   |   ├── teamsInfoCard.module.css
|   |   |   └── index.tsx    
|   |   ├── TextWithIcon\     
|   |   |   ├── textWithIcon.module.css 
|   |   |   └── index.tsx   
|   |   └── UserInfoCard\       
|   |   |   ├── userInfoCard.module.css
|   |   |   └── index.tsx    
│   ├── hooks/     
|   |   └── useFetchFromApi.ts      
│   ├── lib/          
│   |   ├── Alert/          
|   |   |   ├── alert.module.css  
|   |   |   └── index.tsx     
│   |   ├── Avatar/          
|   |   |   ├── avatar.module.css  
|   |   |   └── index.tsx     
│   |   ├── Badge/          
|   |   |   ├── badge.module.css  
|   |   |   └── index.tsx     
│   |   ├── Button/          
|   |   |   ├── button.module.css  
|   |   |   └── index.tsx     
│   |   ├── Card/          
|   |   |   ├── card.module.css  
|   |   |   └── index.tsx     
│   |   ├── DatePicker/          
|   |   |   ├── datePicker.module.css  
|   |   |   └── index.tsx     
│   |   ├── DotSeperator/          
|   |   |   ├── dotSeperator.module.css  
|   |   |   └── index.tsx     
│   |   ├── Spinner/          
|   |   |   ├── spinner.module.css  
|   |   |   └── index.tsx     
│   |   ├── Tabs/          
|   |   |   ├── tab.module.css  
|   |   |   └── index.tsx     
│   |   └── Typography/          
|   |   |   ├── typography.module.css  
|   |   |   └── index.tsx     
│   ├── pages/                 
│   |   ├── BudgetRoom/             
|   |   |   └── index.tsx    
|   |   └── DashboardHome/
|   |   |   ├── dashboardHome.module.css
|   |   |   ├── homepageCardsInfo.ts
|   |   |   └── index.tsx
│   ├── services/              
│   |   └── vedPal.service.ts 
│   ├── utils/                 
│   |   └── config.ts  # all environment variable import happens here. This is so that things like `import.meta.env.VITE_BASE_URL` does not happen anywhere else in code
│   ├── App.tsx            
│   ├── index.css            
│   ├── main.tsx            
|   └── vite-env.d.ts        
├── public/                   
|   └── vite.svg              
├── .gitignore                
├── eslint.config.js         
├── index.html           
├── package-lock.json
├── package.json             
├── tsconfig.app.json     
├── tsconfig.json            
├── tsconfig.node.json        
├── vite.config.ts        
└── README.md           
```
