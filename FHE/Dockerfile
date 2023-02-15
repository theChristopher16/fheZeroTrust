FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -yq tzdata && \
    ln -fs /usr/share/zoneinfo/America/Chicago /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

ENV TZ ='America/Chicago'
# Install required dependencies
RUN apt update && \
    apt install -y \
    cmake \
    libboost-all-dev \
    libprotobuf-dev \
    protobuf-compiler \
    clang \
    git \
    python3-pip
    
RUN update-alternatives --install /usr/bin/cc cc /usr/bin/clang 100
RUN update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang++ 100

# Clone the EVA repository
RUN git clone -b v3.6.4 https://github.com/microsoft/SEAL.git && \
    cd SEAL && \
    cmake -DSEAL_THROW_ON_TRANSPARENT_CIPHERTEXT=OFF . && \
    make -j && \
    make install

RUN git clone https://github.com/microsoft/EVA.git && \
    cd EVA && \
    git submodule update --init && \
    cmake . && \
    make -j && \
    pip install numpy && \
    pip install -e ./python --no-build-isolation && \
    python3 python/setup.py bdist_wheel --dist-dir='.' && \
    python3 tests/all.py && \
    pip install -r examples/requirements.txt 

ENTRYPOINT ["python3", "examples/image_processing.py"]
