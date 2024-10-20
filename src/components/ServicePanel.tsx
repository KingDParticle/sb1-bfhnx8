import React from 'react';
import Panel3D from './Panel3D';
import Button3D from './Button3D';
import Tooltip from './Tooltip';
import { Globe, Bot } from 'lucide-react';

const ServicePanel: React.FC = () => {
  return (
    <Panel3D title="Services">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Website Creation</h3>
          <p className="text-sm mb-2">Create a professional website to showcase your business and attract leads.</p>
          <Tooltip content="Start building your website now">
            <Button3D className="w-full">
              <Globe className="mr-2" size={16} />
              Create Website
            </Button3D>
          </Tooltip>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Embedded Bot</h3>
          <p className="text-sm mb-2">Add a customized chatbot to your existing website to engage visitors and generate leads.</p>
          <Tooltip content="Configure your embedded bot">
            <Button3D className="w-full">
              <Bot className="mr-2" size={16} />
              Create Bot
            </Button3D>
          </Tooltip>
        </div>
      </div>
    </Panel3D>
  );
};

export default ServicePanel;