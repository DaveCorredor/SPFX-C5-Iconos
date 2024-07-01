import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TextoIconosWebPartStrings';
import TextoIconos from './components/TextoIconos';
import { ITextoIconosProps } from './components/ITextoIconosProps';
import { PropertyFieldIconPicker } from '@pnp/spfx-property-controls/lib/PropertyFieldIconPicker';


export interface ITextoIconosWebPartProps {
  titulo1: string;
  description1: string;
  iconPicker1: string;
  titulo2: string;
  description2: string;
  iconPicker2: string;
  titulo3: string;
  description3: string;
  iconPicker3: string;
  titulo4: string;
  description4: string;
  iconPicker4: string;
  titulo5: string;
  description5: string;
  iconPicker5: string;
  titulo6: string;
  description6: string;
  iconPicker6: string;
}

export default class TextoIconosWebPart extends BaseClientSideWebPart<ITextoIconosWebPartProps> {


  public render(): void {
    const element: React.ReactElement<ITextoIconosProps> = React.createElement(
      TextoIconos,
      {
        titulo1: this.properties.titulo1,
        description1: this.properties.description1,
        iconPicker1: this.properties.iconPicker1,
        titulo2: this.properties.titulo2,
        description2: this.properties.description2,
        iconPicker2: this.properties.iconPicker2,
        titulo3: this.properties.titulo3,
        description3: this.properties.description3,
        iconPicker3: this.properties.iconPicker3,
        titulo4: this.properties.titulo4,
        description4: this.properties.description4,
        iconPicker4: this.properties.iconPicker4,
        titulo5: this.properties.titulo5,
        description5: this.properties.description5,
        iconPicker5: this.properties.iconPicker5,
        titulo6: this.properties.titulo6,
        description6: this.properties.description6,
        iconPicker6: this.properties.iconPicker6,
      }
    );

    ReactDom.render(element, this.domElement);
  }


  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
              groupName: strings.BasicGroup1Name,
              groupFields: [
                PropertyPaneTextField('titulo1', {
                  label: strings.DescripcionTitulo,
                  maxLength: 15,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('description1', {
                  label: strings.DescripcionTexto,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
                PropertyFieldIconPicker('iconPicker1', {
                  currentIcon: this.properties.iconPicker1,
                  key: "iconPickerId",
                  onSave: (icon: string) => { console.log(icon); this.properties.iconPicker1 = icon; },
                  onChanged:(icon: string) => { console.log(icon);  },
                  buttonLabel: "Icon",
                  renderOption: "panel",
                  properties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  label: "Icon Picker"              
                }),
              ]
            },
            {
              groupName: strings.BasicGroup2Name,
              groupFields: [
                PropertyPaneTextField('titulo2', {
                  label: strings.DescripcionTitulo,
                  maxLength: 15,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('description2', {
                  label: strings.DescripcionTexto,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
                PropertyFieldIconPicker('iconPicker2', {
                  currentIcon: this.properties.iconPicker2,
                  key: "iconPickerId",
                  onSave: (icon: string) => { console.log(icon); this.properties.iconPicker2 = icon; },
                  onChanged:(icon: string) => { console.log(icon);  },
                  buttonLabel: "Icon",
                  renderOption: "panel",
                  properties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  label: "Icon Picker"              
                }),
              ]
            },
            {
              groupName: strings.BasicGroup3Name,
              groupFields: [
                PropertyPaneTextField('titulo3', {
                  label: strings.DescripcionTitulo,
                  maxLength: 15,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('description3', {
                  label: strings.DescripcionTexto,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
                PropertyFieldIconPicker('iconPicker3', {
                  currentIcon: this.properties.iconPicker3,
                  key: "iconPickerId",
                  onSave: (icon: string) => { console.log(icon); this.properties.iconPicker3 = icon; },
                  onChanged:(icon: string) => { console.log(icon);  },
                  buttonLabel: "Icon",
                  renderOption: "panel",
                  properties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  label: "Icon Picker"              
                }),
              ]
            },
            {
              groupName: strings.BasicGroup4Name,
              groupFields: [
                PropertyPaneTextField('titulo4', {
                  label: strings.DescripcionTitulo,
                  maxLength: 15,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('description4', {
                  label: strings.DescripcionTexto,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
                PropertyFieldIconPicker('iconPicker4', {
                  currentIcon: this.properties.iconPicker4,
                  key: "iconPickerId",
                  onSave: (icon: string) => { console.log(icon); this.properties.iconPicker4 = icon; },
                  onChanged:(icon: string) => { console.log(icon);  },
                  buttonLabel: "Icon",
                  renderOption: "panel",
                  properties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  label: "Icon Picker"              
                }),
              ]
            },
            {
              groupName: strings.BasicGroup5Name,
              groupFields: [
                PropertyPaneTextField('titulo5', {
                  label: strings.DescripcionTitulo,
                  maxLength: 15,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('description5', {
                  label: strings.DescripcionTexto,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
                PropertyFieldIconPicker('iconPicker5', {
                  currentIcon: this.properties.iconPicker5,
                  key: "iconPickerId",
                  onSave: (icon: string) => { console.log(icon); this.properties.iconPicker5 = icon; },
                  onChanged:(icon: string) => { console.log(icon);  },
                  buttonLabel: "Icon",
                  renderOption: "panel",
                  properties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  label: "Icon Picker"              
                }),
              ]
            },
            {
              groupName: strings.BasicGroup6Name,
              groupFields: [
                PropertyPaneTextField('titulo6', {
                  label: strings.DescripcionTitulo,
                  maxLength: 15,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('description6', {
                  label: strings.DescripcionTexto,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
                PropertyFieldIconPicker('iconPicker6', {
                  currentIcon: this.properties.iconPicker6,
                  key: "iconPickerId",
                  onSave: (icon: string) => { console.log(icon); this.properties.iconPicker6 = icon; },
                  onChanged:(icon: string) => { console.log(icon);  },
                  buttonLabel: "Icon",
                  renderOption: "panel",
                  properties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  label: "Icon Picker"              
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
