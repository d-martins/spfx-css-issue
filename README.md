# spfx-css-issue
project to demonstrate issue in SPFx 1.8.0 while runing on MS Teams

### Steps to reproduce

1. Install and deploy the .sppkg file found in the `sharepoint/solution/` folder to the App Catalog
2. From the app catalogue, click the "Sync with teams" button in the ribbon
3. Open a team in the Microsoft Teams application
4. Add a new tab and select the "Red or Green" app
5. Close the property pane
6. Refresh a couple times using the tab using the "reload tab" button (not the browser refresh button)

Some times the background will be displayed in green when it should always be red
