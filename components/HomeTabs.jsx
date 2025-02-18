import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const HomeTabs = ({ tabVal, onChange }) => {
    return (
        <div className="dark:text-gray-200 mx-auto max-w-xs text-base flex font-bold justify-around my-6 cursor-pointer">
            <div
                className={`w-3/6 flex justify-center items-center pb-2  ${(tabVal === 'result' || tabVal === "twitter_on_no_data") ? `border-b-2 border-gray-900 dark:border-gray-300` : ``
                    }`}
                onClick={() => onChange('result')}>
                <FontAwesomeIcon
                    className="text-primary-500 w-5 mr-2"
                    title="View Search Results"
                    icon={faHeartbeat}
                />
                Results
            </div>
            <div
                className={`w-3/6 flex justify-center items-center pb-2  ${tabVal === 'twitter' ? `border-b-2 border-gray-900 dark:border-gray-300` : ``
                    }`}
                onClick={() => onChange('twitter')}>
                <FontAwesomeIcon
                    className="text-secondary-400 w-5 mr-2"
                    title="View Twitter Results"
                    icon={faTwitter}
                />
                Twitter
            </div>
        </div>
    );
};

export default HomeTabs;
