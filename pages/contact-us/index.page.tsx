import { Flex, Text } from '@chakra-ui/react';
import AppField from 'components/AppField';
import AppInput from 'components/AppInput';
import AppTextarea from 'components/AppTextArea';
import Layout from 'components/Layout';
import { NextSeoProps, ProductJsonLd } from 'next-seo';
import { productJsonLd, seoConfigs } from 'next-seo.config';
import { ReactElement, useEffect, useRef, useState } from 'react';
import rf from 'service/RequestFactory';
import styles from 'styles/ContactUs.module.scss';
import { COUNTRIES } from 'utils/constant';
import { toastError, toastSuccess } from 'utils/notify';
import { createValidator } from 'utils/validator';
import dynamic from 'next/dynamic';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { setRecaptchaToRequest } from 'utils/recaptcha';
const DynamicSelect = dynamic(() => import('react-select'), {
  ssr: false,
});

const listCountry = COUNTRIES.map((item: { name: string }) => {
  return {
    label: item.name,
    value: item.name,
  };
});

export interface IDataFormContact {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  country?: string;
  networkOrChain: string;
  telegram?: string;
  feedback?: string;
}

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  networkOrChain: '',
  telegram: '',
  feedback: '',
  company: '',
};

const ContactUs = () => {
  const [dataContact, setDataContact] = useState<IDataFormContact>(initialForm);
  const [isDisableSubmit, setIsDisableSubmit] = useState<boolean>(true);
  const [isHiddenError, setIsHiddenError] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const validator = useRef(
    createValidator({
      element: (message: string) => <Text color={'red.100'}>{message}</Text>,
    }),
  );

  const handleSubmit = async () => {
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      return;
    }
    try {
      if (!executeRecaptcha) {
        toastError({
          message: 'Oops. Something went wrong!',
        });
        return;
      }

      const result = await executeRecaptcha('homepage');
      setRecaptchaToRequest(result);
      await rf.getRequest('UserRequest').contactToAdmin(dataContact);
      toastSuccess({ message: 'Send email successfully' });
    } catch (error: any) {
      toastError({
        message: error?.message || 'Oops. Something went wrong!',
      });
    }
    setIsHiddenError(true);
    setDataContact({ ...initialForm });
  };
  useEffect(() => {
    const isDisabled = !validator.current.allValid();
    setIsDisableSubmit(isDisabled);
  }, [dataContact]);

  return (
    <div className={styles['contact-us']}>
      <h1 className={styles['title-contact-us']}>
        <span>Sota Labs</span> <br /> <span>by filling the form</span>
      </h1>
      <p className={styles['desc-about-us']}>
        {`Simply fill in this form and we'll get in touch with you to discuss in further details.`}
        <br />
        {`All information will be kept confidential.`}
      </p>
      <div className={styles['form-contact-us']}>
        <Flex direction={'row'} justifyContent="space-between" wrap={'wrap'}>
          <AppField label="First Name" isRequired customWidth={'49%'}>
            <AppInput
              hiddenErrorText={isHiddenError}
              onChange={(e) => {
                setIsHiddenError(false);
                setDataContact({ ...dataContact, firstName: e.target.value });
              }}
              value={dataContact.firstName}
              validate={{
                name: `firstName`,
                validator: validator.current,
                rule: ['required'],
              }}
            />
          </AppField>

          <AppField label="Last Name" isRequired customWidth="49%">
            <AppInput
              hiddenErrorText={isHiddenError}
              onChange={(e) => {
                setIsHiddenError(false);
                setDataContact({ ...dataContact, lastName: e.target.value });
              }}
              value={dataContact.lastName}
              validate={{
                name: `lastName`,
                validator: validator.current,
                rule: ['required'],
              }}
            />
          </AppField>
        </Flex>
        <Flex direction={'row'} justifyContent="space-between" wrap={'wrap'}>
          <AppField label="Email Address" isRequired>
            <AppInput
              hiddenErrorText={isHiddenError}
              onChange={(e) => {
                setIsHiddenError(false);
                setDataContact({ ...dataContact, email: e.target.value });
              }}
              value={dataContact.email}
              validate={{
                name: `email`,
                validator: validator.current,
                rule: ['required', 'email'],
              }}
            />
          </AppField>
        </Flex>
        <Flex direction={'row'} justifyContent="space-between" wrap={'wrap'}>
          <AppField label="Your Company" customWidth="49%">
            <AppInput
              hiddenErrorText={isHiddenError}
              onChange={(e) => {
                setIsHiddenError(false);
                setDataContact({ ...dataContact, company: e.target.value });
              }}
              value={dataContact.company}
            />
          </AppField>
          <AppField label="Your Country" customWidth="49%">
            <DynamicSelect
              className="react-select-container"
              classNamePrefix="react-select"
              aria-labelledby="aria-label"
              name="aria-live-color"
              onChange={(value: any) => {
                setIsHiddenError(false);
                setDataContact({ ...dataContact, country: value?.value });
              }}
              options={listCountry}
              placeholder=""
              closeMenuOnScroll={true}
            />
          </AppField>
        </Flex>
        <Flex direction={'row'} justifyContent="space-between" wrap={'wrap'}>
          <AppField
            label="Network/Chains Of Interest"
            isRequired
            customWidth="49%"
          >
            <AppInput
              hiddenErrorText={isHiddenError}
              onChange={(e) => {
                setIsHiddenError(false);
                setDataContact({
                  ...dataContact,
                  networkOrChain: e.target.value,
                });
              }}
              value={dataContact.networkOrChain}
              validate={{
                name: `networkOrChain`,
                validator: validator.current,
                rule: ['required'],
              }}
            />
          </AppField>

          <AppField label="Telegram" customWidth="49%">
            <AppInput
              onChange={(e) => {
                setIsHiddenError(false);
                setDataContact({ ...dataContact, telegram: e.target.value });
              }}
              value={dataContact.telegram}
            />
          </AppField>
        </Flex>
        <AppField label="Tell us about your inquiries">
          <AppTextarea
            rows={6}
            onChange={(e) => {
              setIsHiddenError(false);
              setDataContact({ ...dataContact, feedback: e.target.value });
            }}
            value={dataContact.feedback}
          />
        </AppField>
        <Flex justifyContent={'right'} paddingBottom={'120px'}>
          <button
            className={styles['btn-submit']}
            onClick={handleSubmit}
            disabled={isDisableSubmit}
          >
            Submit
          </button>
        </Flex>
      </div>
    </div>
  );
};

export default ContactUs;

ContactUs.getLayout = function (page: ReactElement) {
  const seoProps: NextSeoProps = {
    title: `${seoConfigs.title} - Contact Us`,
  };
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={'6LcchvMjAAAAAG9Bqt0aP3KBWI9Gg-UtCVg6DGRH'}
      >
        <Layout {...seoProps} className="pricing-container">
          <ProductJsonLd {...productJsonLd} />
          {page}
        </Layout>
      </GoogleReCaptchaProvider>
    </>
  );
};
