/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInput from './LabeledInput';
import { ComboBox, Select, Input } from './index';


storiesOf('03 - Components', module).addWithChapters('Inputs', {
  subtitle: 'Input type text',
  chapters: [
    {
      sections: [
      {
        title: 'Select Input',
        sectionFn: () => (
          <div style={{maxWidth: 320, margin: "0 auto"}}>
            <Select data={['helllo', 'yo', 'wesh']}/>
          </div>
        ),
        options: {
          showSource: true,
          showPropTables: true
        }
      },{
          title: 'Text Input',
          sectionFn: () => (
            <div style={{maxWidth: 320, margin: "0 auto"}}>
              <Input /> <br/>
              <Input name="toto" value="focused" autoFocus/><br/>
              <Input name="toto" value="validated" isValid /><br/>
              <Input name="toto" value="errored" hasError /><br/>
              <Input name="toto" type="password" value="MyPasswordIsAwsome" hasError /><br/>
            </div>
          ),
          options: {
            showSource: true,
            showPropTables: true
          }
        },{
          title: 'Text Input with label, infos and error display',
          sectionFn: () => (
            <div style={{maxWidth: 320, margin: "0 auto"}}>
              <LabeledInput
                componentName="input"
                toggleShake={0}
                value="hello"
                type="password"
                label="Choose a password :"
                fillInfos="Fill it that way or that way"
                error="it's a big mistake"
                handleChange={()=>{}}
                name="toto"
              />
              <LabeledInput
                componentName="input"
                toggleShake={0}
                value="hello"
                type="password"
                label="Confirm your password :"
                isValid
                handleChange={()=>{}}
                name="tata"
              />
            </div>
          ),
          options: {
            showSource: true,
            showPropTables: true
          }
        },{
          title: 'ComboBox',
          sectionFn: () => (
            <div style={{maxWidth: 320, margin: "0 auto"}}>

              <ComboBox placeholder="Enter your country name" name="combobox" onSelectedOption={(option) => alert(`name: ${option.name}, dial_code: ${option.dial_code}, code: ${option.code}`)} data={[{ name: 'Afghanistan', dial_code: '+93', code: 'AF' },
              { name: 'Aland Islands', dial_code: '+358', code: 'AX' },
              { name: 'Albania', dial_code: '+355', code: 'AL' },
              { name: 'Algeria', dial_code: '+213', code: 'DZ' },
              { name: 'AmericanSamoa', dial_code: '+1684', code: 'AS' },
              { name: 'Andorra', dial_code: '+376', code: 'AD' },
              { name: 'Angola', dial_code: '+244', code: 'AO' },
              { name: 'Anguilla', dial_code: '+1264', code: 'AI' },
              { name: 'Antarctica', dial_code: '+672', code: 'AQ' },
              { name: 'Antigua and Barbuda', dial_code: '+1268', code: 'AG' },
              { name: 'Argentina', dial_code: '+54', code: 'AR' },
              { name: 'Armenia', dial_code: '+374', code: 'AM' },
              { name: 'Aruba', dial_code: '+297', code: 'AW' },
              { name: 'Australia', dial_code: '+61', code: 'AU' },
              { name: 'Austria', dial_code: '+43', code: 'AT' },
              { name: 'Azerbaijan', dial_code: '+994', code: 'AZ' },
              { name: 'Bahamas', dial_code: '+1242', code: 'BS' },
              { name: 'Bahrain', dial_code: '+973', code: 'BH' },
              { name: 'Bangladesh', dial_code: '+880', code: 'BD' },
              { name: 'Barbados', dial_code: '+1246', code: 'BB' },
              { name: 'Belarus', dial_code: '+375', code: 'BY' },
              { name: 'Belgium', dial_code: '+32', code: 'BE' },
              { name: 'Belize', dial_code: '+501', code: 'BZ' },
              { name: 'Benin', dial_code: '+229', code: 'BJ' },
              { name: 'Bermuda', dial_code: '+1441', code: 'BM' },
              { name: 'Bhutan', dial_code: '+975', code: 'BT' },
              { name: 'Bolivia, Plurinational State of bolivia', dial_code: '+591', code: 'BO' },
              { name: 'Bosnia and Herzegovina', dial_code: '+387', code: 'BA' },
              { name: 'Botswana', dial_code: '+267', code: 'BW' },
              { name: 'Brazil', dial_code: '+55', code: 'BR' },
              { name: 'British Indian Ocean Territory', dial_code: '+246', code: 'IO' },
              { name: 'Brunei Darussalam', dial_code: '+673', code: 'BN' },
              { name: 'Bulgaria', dial_code: '+359', code: 'BG' },
              { name: 'Burkina Faso', dial_code: '+226', code: 'BF' },
              { name: 'Burundi', dial_code: '+257', code: 'BI' },
              { name: 'Cambodia', dial_code: '+855', code: 'KH' },
              { name: 'Cameroon', dial_code: '+237', code: 'CM' },
              { name: 'Canada', dial_code: '+1', code: 'CA' },
              { name: 'Cape Verde', dial_code: '+238', code: 'CV' },
              { name: 'Cayman Islands', dial_code: '+ 345', code: 'KY' },
              { name: 'Central African Republic', dial_code: '+236', code: 'CF' },
              { name: 'Chad', dial_code: '+235', code: 'TD' },
              { name: 'Chile', dial_code: '+56', code: 'CL' },
              { name: 'China', dial_code: '+86', code: 'CN' },
              { name: 'Christmas Island', dial_code: '+61', code: 'CX' },
              { name: 'Cocos (Keeling) Islands', dial_code: '+61', code: 'CC' },
              { name: 'Colombia', dial_code: '+57', code: 'CO' },
              { name: 'Comoros', dial_code: '+269', code: 'KM' },
              { name: 'Congo', dial_code: '+242', code: 'CG' },
              { name: 'Congo, The Democratic Republic of the Congo', dial_code: '+243', code: 'CD' },
              { name: 'Cook Islands', dial_code: '+682', code: 'CK' },
              { name: 'Costa Rica', dial_code: '+506', code: 'CR' },
              { name: "Cote d'Ivoire", dial_code: '+225', code: 'CI' },
              { name: 'Croatia', dial_code: '+385', code: 'HR' },
              { name: 'Cuba', dial_code: '+53', code: 'CU' },
              { name: 'Cyprus', dial_code: '+357', code: 'CY' },
              { name: 'Czech Republic', dial_code: '+420', code: 'CZ' },
              { name: 'Denmark', dial_code: '+45', code: 'DK' },
              { name: 'Djibouti', dial_code: '+253', code: 'DJ' },
              { name: 'Dominica', dial_code: '+1767', code: 'DM' },
              { name: 'Dominican Republic', dial_code: '+1849', code: 'DO' },
              { name: 'Ecuador', dial_code: '+593', code: 'EC' },
              { name: 'Egypt', dial_code: '+20', code: 'EG' },
              { name: 'El Salvador', dial_code: '+503', code: 'SV' },
              { name: 'Equatorial Guinea', dial_code: '+240', code: 'GQ' },
              { name: 'Eritrea', dial_code: '+291', code: 'ER' },
              { name: 'Estonia', dial_code: '+372', code: 'EE' },
              { name: 'Ethiopia', dial_code: '+251', code: 'ET' },
              { name: 'Falkland Islands (Malvinas)', dial_code: '+500', code: 'FK' },
              { name: 'Faroe Islands', dial_code: '+298', code: 'FO' },
              { name: 'Fiji', dial_code: '+679', code: 'FJ' },
              { name: 'Finland', dial_code: '+358', code: 'FI' },
              { name: 'France', dial_code: '+33', code: 'FR' },
              { name: 'French Guiana', dial_code: '+594', code: 'GF' },
              { name: 'French Polynesia', dial_code: '+689', code: 'PF' },
              { name: 'Gabon', dial_code: '+241', code: 'GA' },
              { name: 'Gambia', dial_code: '+220', code: 'GM' },
              { name: 'Georgia', dial_code: '+995', code: 'GE' },
              { name: 'Germany', dial_code: '+49', code: 'DE' },
              { name: 'Ghana', dial_code: '+233', code: 'GH' },
              { name: 'Gibraltar', dial_code: '+350', code: 'GI' },
              { name: 'Greece', dial_code: '+30', code: 'GR' },
              { name: 'Greenland', dial_code: '+299', code: 'GL' },
              { name: 'Grenada', dial_code: '+1473', code: 'GD' },
              { name: 'Guadeloupe', dial_code: '+590', code: 'GP' },
              { name: 'Guam', dial_code: '+1671', code: 'GU' },
              { name: 'Guatemala', dial_code: '+502', code: 'GT' },
              { name: 'Guernsey', dial_code: '+44', code: 'GG' },
              { name: 'Guinea', dial_code: '+224', code: 'GN' },
              { name: 'Guinea-Bissau', dial_code: '+245', code: 'GW' },
              { name: 'Guyana', dial_code: '+592', code: 'GY' },]}/>
            </div>
          ),
          options: {
            showSource: true,
            showPropTables: true
          }
        }
      ]
    }
  ]
})
