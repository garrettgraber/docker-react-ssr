FROM stefanscherer/node-windows:10.11


RUN npm install -g nodemon

RUN npm config set registry http://registry.npmjs.org/

RUN npm install -g npm-install-missing

#RUN set-itemproperty -path 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\DOS Devices' -Name 'G:' -Value '\??\C:\code' -Type String
#WORKDIR 'G:\\'


RUN mkdir root
#WORKDIR /root/app

#COPY package.json /app
ADD package.json /root/package.json


#RUN cd /root && npm install --save

#COPY . /app




EXPOSE 8082

#CMD ["npm", "start"]

#wire in a startup script
ADD bootstrap.bat /root/bootstrap.bat

CMD /root/bootstrap.bat

#CMD runas /user:Administrator /root/bootstrap.bat && cmd

