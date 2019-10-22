FROM caindevelopers/cen_ciosa:v0.0.1
LABEL MAINTAINER="CIOSA"
WORKDIR /app
COPY . .
RUN python3.7 -m pip install -r requirements.txt
EXPOSE 3000
CMD [ "python3.7","server.py" ]