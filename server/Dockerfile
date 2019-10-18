FROM python:3.7.4-alpine3.10
LABEL MAINTAINER="CIOSA"
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 3000
CMD [ "python","server.py" ]