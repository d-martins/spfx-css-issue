import { Version } from '@microsoft/sp-core-library';
import { 
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField 
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './RedOrGreenWebPart.module.scss';
import * as strings from 'RedOrGreenWebPartStrings';

export interface IRedOrGreenWebPartProps {
  description: string;
}

require('../../../css/green.css');

export default class RedOrGreenWebPart extends BaseClientSideWebPart<IRedOrGreenWebPartProps> {

  public onInit<T>():Promise<void>{
    require('../../../css/red.css');

    return Promise.resolve();
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.redOrGreen }">
        <div class="${ styles.container }">
          <div class="" id="test123">
            <div class="">
              <span class="">Welcome to SharePoint!</span>
              <p class="">Customize SharePoint experiences using Web Parts.</p>
              <p class="">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="">
                <span class="">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
